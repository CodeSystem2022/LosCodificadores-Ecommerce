import { useState } from "react";

export function useHandleCarrusel(itemsPerView){
    const [actualGroup, setActualGroup] = useState(1);

  function isInActualGroup(id) {
    const prevGroup = actualGroup - 1;
    if (id < itemsPerView * actualGroup && id >= itemsPerView * prevGroup) {
      return true;
    }
    return false;
  }

  function isInPrevGroup(id) {
    if (id < actualGroup * itemsPerView - itemsPerView) {
      return true;
    }
    return false;
  }

  function isInNextGroup(id) {
    if (id >= actualGroup * itemsPerView) {
      return true;
    }
    return false;
  }

  function incrementPosition() {
    setActualGroup(actualGroup + 1);
  }
  function decrementPosition() {
    if (actualGroup > 1) {
      setActualGroup(actualGroup - 1);
    }
  }

  return {actualGroup, isInActualGroup, isInNextGroup, isInPrevGroup, incrementPosition, decrementPosition}
}