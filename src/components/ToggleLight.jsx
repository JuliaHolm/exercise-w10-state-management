import { useStore } from "../stores/useStore";

export const ToggleLight = () => {
  const { toggleLight, isLight } = useStore();
  return (
    <div className="wrapper">
      <div className={isLight ? "white" : "black"}>
        <button onClick={toggleLight}>
          {isLight ? "Dark mode" : "Light mode"}
        </button>
      </div>
    </div>
  );
};
