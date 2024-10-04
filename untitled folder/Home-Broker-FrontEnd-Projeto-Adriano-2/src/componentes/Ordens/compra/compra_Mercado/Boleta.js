import React, { useMemo, useEffect } from "react";
import useStateStorePrincipal from "./useStateStorePrincipal";
import { Animate } from "react-show";

import { aumentarZindexAction } from "./GlobalAppActions";
import useDispatchGlobalStore from "./useDispatchGlobalStore";
import useStateGlobalStore from "./useStateGlobalStore";
import usePrevious from "./usePrevious";
import BoletaUpdateManager from "./BoletaUpdateManager";
import BookUpdateManager from "./BookUpdateManager";

const startStyle = {
  opacity: 0,
  pointerEvents: "none",
};

const Boleta = ({
  children,
  boletaName,
  visibilityIndex,
  appKey,
  namespace,
}) => {
  const { systemReducer: { selectedTab } } = useStateStorePrincipal();
  const { show, zIndex } = useStateGlobalStore();
  const dispatchGlobal = useDispatchGlobalStore();

  const visibility = show[visibilityIndex][boletaName];
  const previousVisibility = usePrevious(visibility);

  useEffect(() => {
    if (previousVisibility !== visibility && visibility) {
      // Quando a visibilidade muda para true, execute algo, se necessário
    }
  }, [visibility, previousVisibility]);

  const hideStyle = useMemo(() => {
    return visibility ? {} : { display: "none" };
  }, [visibility]);

  return (
    <Animate
      show={visibility}
      duration={visibility ? 100 : 0}
      transitionOnMount
      preMount
      start={startStyle}
      style={hideStyle}
      id={`${boletaName}${appKey}`}
      onClick={() =>
        dispatchGlobal(
          aumentarZindexAction(
            `${boletaName}${appKey}`,
            zIndex,
            visibility
          )
        )
      }
    >
      {children}
      {boletaName === "book" && <BookUpdateManager />}
      {boletaName !== "book" && namespace && (
        <BoletaUpdateManager namespace={namespace} visibility={visibility} />
      )}
    </Animate>
  );
};

export default Boleta;
