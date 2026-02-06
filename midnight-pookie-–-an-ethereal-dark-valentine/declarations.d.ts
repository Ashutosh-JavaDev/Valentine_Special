declare module 'react' {
    export = React;
    export as namespace React;
    namespace React {
      type ReactNode = any;
      type CSSProperties = any;
      type ComponentType<P = {}> = any;
      type FC<P = {}> = any;
      type ReactElement<P = any, T = any> = any;
      type Component<P = any> = any;
      type RefObject<T> = { current: T | null };
      
      function useState<T>(initialState: T | (() => T)): [T, (value: T) => void];
      function useEffect(effect: () => void | (() => void), deps?: any[]): void;
      function useRef<T>(initialValue: T | null): RefObject<T>;
      function useRef<T = undefined>(): RefObject<T | undefined>;
      
      const Fragment: any;
    }
  }
  
  declare module 'react/jsx-runtime' {
    export namespace JSX {
      interface IntrinsicElements {
        [elemName: string]: any;
      }
      interface Element extends React.ReactElement<any, any> { }
      interface ElementClass extends React.Component<any> {
        render(): React.ReactNode;
      }
    }
    export const jsx: any;
    export const jsxs: any;
    export const Fragment: any;
  }
  
  declare module 'react-dom' {
    export = ReactDOM;
    export as namespace ReactDOM;
    namespace ReactDOM {
      function createRoot(container: Element | DocumentFragment): any;
    }
  }
  
  declare module 'framer-motion' {
    import { ComponentType, ReactNode, CSSProperties } from 'react';
  
    export interface MotionProps {
      initial?: any;
      animate?: any;
      exit?: any;
      transition?: any;
      whileHover?: any;
      whileTap?: any;
      className?: string;
      style?: CSSProperties;
      children?: ReactNode;
      onClick?: () => void;
      onMouseEnter?: () => void;
      [key: string]: any;
    }
  
    export const motion: {
      div: ComponentType<MotionProps>;
      button: ComponentType<MotionProps>;
      span: ComponentType<MotionProps>;
      p: ComponentType<MotionProps>;
      section: ComponentType<MotionProps>;
      article: ComponentType<MotionProps>;
      h1: ComponentType<MotionProps>;
      h2: ComponentType<MotionProps>;
      h3: ComponentType<MotionProps>;
      img: ComponentType<MotionProps>;
      [key: string]: ComponentType<MotionProps>;
    };
  
    export const AnimatePresence: ComponentType<{
      children?: ReactNode;
      mode?: 'wait' | 'sync' | 'popLayout';
      initial?: boolean;
      [key: string]: any;
    }>;
  }
  
  declare module 'lucide-react' {
    import { ComponentType } from 'react';
    
    export interface LucideProps {
      size?: number | string;
      color?: string;
      strokeWidth?: number | string;
      className?: string;
      [key: string]: any;
    }
  
    export const Heart: ComponentType<LucideProps>;
    export const Star: ComponentType<LucideProps>;
    export const Music: ComponentType<LucideProps>;
    export const Sparkles: ComponentType<LucideProps>;
    export const Gift: ComponentType<LucideProps>;
    export const Coffee: ComponentType<LucideProps>;
    // Add any other icons you're using
  }