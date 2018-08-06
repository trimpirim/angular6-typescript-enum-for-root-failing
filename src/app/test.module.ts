import {forwardRef, InjectionToken, NgModule, Injectable} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleWithProviders} from '@angular/compiler/src/core';

export interface ModuleConfigInterface {
  content?: string[];
}

@Injectable()
export class FakeCustomService {
  private content: string[] = [];

  setContent(content: string[]) {
    this.content = content;
  }
}

export abstract class CustomService {
  abstract setContent(content: string[]);
}

export const serviceFactory = (content: string[]) => {
  const service = new FakeCustomService();
  console.log('VALUES', content);
  service.setContent(content);
  return service;
};

export const MODULE_CONFIG_VALUES = new InjectionToken<string[]>('Injection token');

export const customServiceProvider = {
  provide: CustomService,
  useFactory: serviceFactory,
  deps: [MODULE_CONFIG_VALUES]
};

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [],
  exports: []
})
export class TestModule {
  static forRoot(config: ModuleConfigInterface = {}): ModuleWithProviders {
    return {
      ngModule: TestModule,
      providers: [
        {
          provide: MODULE_CONFIG_VALUES, useValue: config.content,
        },
        customServiceProvider
      ]
    };
  }
}
