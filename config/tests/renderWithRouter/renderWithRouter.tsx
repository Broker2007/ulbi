import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from 'shared/config/i18n/i18nForTests';
import { MemoryRouter } from 'react-router-dom';

export interface renderWithRouterOptions {
    route: string;
}

export function renderWithRouter(component: ReactNode, options:renderWithRouterOptions) {
    const { route } = options;
    return render(
        <MemoryRouter initialEntries={[]} />,
    );
}
