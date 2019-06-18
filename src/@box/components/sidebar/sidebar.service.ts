import { Injectable } from '@angular/core';

import { BoxSidebarComponent } from './sidebar.component';

@Injectable({
    providedIn: 'root'
})
export class BoxSidebarService
{
    private _registry: { [key: string]: BoxSidebarComponent } = {};

    constructor()
    {

    }

    register(key, sidebar): void
    {
        if ( this._registry[key] )
        {
            console.error(`The sidebar with the key '${key}' already exists. Either unregister it first or use a unique key.`);

            return;
        }

        this._registry[key] = sidebar;
    }

    unregister(key): void
    {
        if ( !this._registry[key] )
        {
            console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);
        }

        delete this._registry[key];
    }

    getSidebar(key): BoxSidebarComponent
    {
        if ( !this._registry[key] )
        {
            console.warn(`The sidebar with the key '${key}' doesn't exist in the registry.`);

            return;
        }

        return this._registry[key];
    }
}
