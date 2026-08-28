import { useEffect } from "react";
import { Building } from "./Building";
import { Buildings } from "./Buildings";
import { Brief } from "./Brief";
import { Hud } from "./Hud";
import { MapScreen } from "./MapScreen";
import { Missions } from "./Missions";
import { Nav } from "./Nav";
import { Place } from "./Place";
import { Team } from "./Team";
import { Title } from "./Title";
import { Village } from "./Village";
import { Win } from "./Win";
import { useGame } from "@/lib/beboki-store";

export function BebokiApp() {
  const screen = useGame((s) => s.screen);
  const toast = useGame((s) => s.toast);
  const setToast = useGame((s) => s.setToast);

  useEffect(() => {
    void Promise.resolve(useGame.persist.rehydrate()).then(() => {
      useGame.getState().tickPets();
    });
    const id = window.setInterval(() => useGame.getState().tickPets(), 12000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!toast) return;
    const id = window.setTimeout(() => setToast(""), 2600);
    return () => window.clearTimeout(id);
  }, [toast, setToast]);

  const showChrome = screen !== "title" && screen !== "win" && screen !== "brief" && screen !== "place" && screen !== "building";

  return (
    <div className="flex h-dvh flex-col bg-bg text-fg">
      {showChrome ? <Hud /> : null}
      <main className="relative flex min-h-0 flex-1 flex-col">
        <div key={screen} className="flex min-h-0 flex-1 flex-col screen-hop">
          {screen === "title" ? <Title /> : null}
          {screen === "village" ? <Village /> : null}
          {screen === "buildings" ? <Buildings /> : null}
          {screen === "building" ? <Building /> : null}
          {screen === "team" ? <Team /> : null}
          {screen === "map" ? <MapScreen /> : null}
          {screen === "missions" ? <Missions /> : null}
          {screen === "brief" ? <Brief /> : null}
          {screen === "place" ? <Place /> : null}
          {screen === "win" ? <Win /> : null}
        </div>
      </main>
      {showChrome ? <Nav /> : null}
      {toast ? (
        <p
          role="status"
          className="pointer-events-none absolute bottom-24 left-1/2 z-30 w-[90%] max-w-sm -translate-x-1/2 rounded-lg border border-gold bg-coal px-4 py-2 text-center text-sm text-fg shadow-panel"
        >
          {toast}
        </p>
      ) : null}
    </div>
  );
}
