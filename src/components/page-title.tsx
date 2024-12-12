import classNames from "classnames";

interface IProps {
  title: string;
  className?: string;
}

const PageTitle = ({ title, className }: IProps) => {
  return (
    <h1
      className={classNames(
        "text-3xl font-bold leading-tight tracking-tighter md:text-4xl lg:leading-[1.1] md:block text-gray-900 dark:text-white",
        className
      )}
    >
      {title}
    </h1>
  );
};

export default PageTitle;
