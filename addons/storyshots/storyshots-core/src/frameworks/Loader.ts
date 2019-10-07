import { StoryshotsOptions } from '../api/StoryshotsOptions';

type SupportedFramework = 'angular' | 'html' | 'preact' | 'react' | 'riot' | 'react-native' | 'svelte';

export type RenderTree = (story: any) => any;

export interface Loader {
  load: (
    options: StoryshotsOptions
  ) => {
    framework: SupportedFramework;
    renderTree: RenderTree;
    renderShallowTree: any;
    storybook: any;
  };
  test: (options: StoryshotsOptions) => boolean;
}
