import { Component, createSignal } from 'solid-js';

const Configuration: Component = () => {
  const [endpoint, setEndpoint] = createSignal('');
  const [apiKey, setApiKey] = createSignal('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(endpoint() + ' ' + apiKey());
  };

  return (
    <div class="max-w-md mt-12 mx-auto">
      <form class="grid grid-cols-1 gap-6" onSubmit={onSubmit}>
        <label class="block">
          <span class="text-sm text-gray-700">S3 Endpoint</span>
          <input
            type="text"
            class="focus:outline-none mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Enter an S3 endpoint"
            onChange={(event) => setEndpoint(event?.currentTarget?.value)}
          />
        </label>
        <label class="block">
          <span class="text-sm text-gray-700">API Key</span>
          <input
            type="password"
            class="focus:outline-none mt-0 block w-full border-0 border-b-2 border-gray-200 px-0.5 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
            placeholder="Enter the API key"
            onChange={(event) => setApiKey(event?.currentTarget?.value)}
          />
        </label>
        <button
          type="submit"
          class="mt-8 rounded-sm bg-white border border-black py-2
                    uppercase text-black hover:bg-gray-100
                    hover:shadow-none focus:outline-none"
        >
          <div class="relative">
            <span>Save</span>
          </div>
        </button>
      </form>
    </div>
  );
};

export default Configuration;
