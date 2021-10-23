import { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full">
    {props.meta}
    <div className="mx-auto">
      <div className="text-xl content">{props.children}</div>
    </div>
  </div>
);

export { Main };
