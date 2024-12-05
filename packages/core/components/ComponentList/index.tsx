import styles from "./styles.module.css";
import getClassNameFactory from "../../lib/get-class-name-factory";
import {ReactElement, ReactNode} from "react";
import { useAppContext } from "../Puck/context";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Drawer } from "../Drawer";

const getClassName = getClassNameFactory("ComponentList", styles);

const ComponentListItem = ({
  name,
  label,
  index,
 className,
    template
}: {
  name: string;
  label?: string;
  index: number;
  className?: string;
  template?: (props: { children: ReactNode; name: string }) => ReactElement;
}) => {
  const { overrides, getPermissions } = useAppContext();

  const canInsert = getPermissions({
    type: name,
  }).insert;

  return (
    <Drawer.Item
      template={template}
      label={label}
      name={name}
      index={index}
      className={className}
      isDragDisabled={!canInsert}
    >
      {overrides.componentItem}
    </Drawer.Item>
  );
};

const ComponentList = ({
  children,
  title,
  id,
  className,
   itemClassName,
   listItemTemplate
}: {
  id: string;
  children?: ReactNode;
  title?: string;
  className?: string;
  itemClassName?: string;
  listItemTemplate?: (props: { children: ReactNode; name: string }) => ReactElement;
}) => {
  const { config, state, setUi } = useAppContext();

  const { expanded = true } = state.ui.componentList[id] || {};
  return (
    <div className={`${getClassName({ isExpanded: expanded })}`}>
      {title && (
        <button
          type="button"
          className={getClassName("title")}
          onClick={() =>
            setUi({
              componentList: {
                ...state.ui.componentList,
                [id]: {
                  ...state.ui.componentList[id],
                  expanded: !expanded,
                },
              },
            })
          }
          title={
            expanded
              ? `Collapse${title ? ` ${title}` : ""}`
              : `Expand${title ? ` ${title}` : ""}`
          }
        >
          <div>{title}</div>
          <div className={getClassName("titleIcon")}>
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </div>
        </button>
      )}
      <div className={`${getClassName("content")} ${className}`}>
        <Drawer droppableId={title}>
          {children ||
            Object.keys(config.components).map((componentKey, i) => {
              return (
                <ComponentListItem
                  key={componentKey}
                  label={
                    config.components[componentKey]["label"] ?? componentKey
                  }
                  name={componentKey}
                  template={listItemTemplate}
                  className={itemClassName}
                  index={i}
                />
              );
            })}
        </Drawer>
      </div>
    </div>
  );
};

ComponentList.Item = ComponentListItem;

export { ComponentList };
