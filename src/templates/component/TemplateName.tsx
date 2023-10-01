import React from "react";
import styles from "./TemplateName.module.scss";
import clsx from "clsx";

export type TemplateNameProps = {
  className?: string;
};
export const TemplateName: React.FC<TemplateNameProps> = ({ className }) => {
  return (
    <div className={clsx(styles.TemplateName, className)}>
      TemplateName Component
    </div>
  );
};
