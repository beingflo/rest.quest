/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import Bootstrap from './Bootstrap';

render(() => <Bootstrap />, document.getElementById('root') as HTMLElement);
