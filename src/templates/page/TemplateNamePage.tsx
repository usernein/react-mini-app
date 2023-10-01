import React from "react";
import styles from "./TemplateName.module.scss";
import clsx from "clsx";

export type TemplateNamePageProps = {
  className?: string;
};
export const TemplateNamePage: React.FC<TemplateNamePageProps> = ({
  className,
}) => {
  return (
    <div className={clsx(styles.TemplateNamePage, className)}>
      TemplateNamePage Page
    </div>
  );
};
