import {TestBed} from "@angular/core/testing";
import {ProviderToken} from "@angular/core";

export * from './lib/mock-inject.module';


type MockedProviderToken<T> = T extends ProviderToken<infer Type> ? ProviderToken<Type> : never;
