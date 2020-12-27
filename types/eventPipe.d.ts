import { EventCoreConfig } from "./index";

export type PipeListener = "pipeEnd" | "pipeMiddle" | 'pipeStopped' | 'pipeError'
export interface EventPipeConfig extends EventCoreConfig {
  pipeEnd?: Function,
  pipeMiddle?: Function,
  pipeStopped?: Function,
  pipeError?: Function
}
// export interface EventPipe {
//   pipe: Array<Function>;
//   mark: Array<Function>;
//   add (event: string, callback: Function): boolean;
//   delete (event: string): boolean;
//   clear (): boolean;
//   start (): void;
//   stop (): void;
//   listen (hook: string, callback: Function): boolean;
// }