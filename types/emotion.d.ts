import { GlobalToken } from "antd";

declare module "@emotion/react" {
  export interface Theme extends GlobalToken {}
}
