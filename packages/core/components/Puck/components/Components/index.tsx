import { useComponentList } from "../../../../lib/use-component-list";
import { useAppContext } from "../../context";
import { ComponentList } from "../../../ComponentList";
import { useMemo } from "react";

export const Components = ({className, itemClassName, listItemTemplate}) => {
  const { config, state, overrides } = useAppContext();
  const componentList = useComponentList(config, state.ui, itemClassName, className, listItemTemplate);
  const Wrapper = useMemo(() => overrides.components || "div", [overrides]);

  return (
    <Wrapper>
      {componentList ? componentList : <ComponentList className={className} itemClassName={itemClassName} id="all" />}
    </Wrapper>
  );
};
