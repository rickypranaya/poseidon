import { useState } from 'react';
import { Switch } from '@headlessui/react';
import classNames from 'classnames';

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={classNames(
        enabled ? 'bg-primary' : 'bg-gray-900',
        'relative inline-flex flex-shrink-0 h-5 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200'
      )}
    >
      <span className="sr-only">Use setting</span>
      <span
        aria-hidden="true"
        className={classNames(
          enabled ? 'translate-x-4 bg-gray-900' : 'translate-x-0 bg-gray-600',
          'pointer-events-none inline-block h-4 w-4 rounded-full shadow transform ring-0 transition ease-in-out duration-200'
        )}
      />
    </Switch>
  );
}
