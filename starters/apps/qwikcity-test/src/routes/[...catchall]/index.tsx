import { component$ } from '@builder.io/qwik';
import { DocumentHead, RequestHandler, useLocation } from '@builder.io/qwik-city';

export default component$(() => {
  const loc = useLocation();

  return (
    <div>
      <h1>Catch All</h1>
      <p>
        <span>loc.params.catchall: </span>
        <code data-test-params="catchall">{loc.params.catchall}</code>
      </p>
      <p>
        <a href="/qwikcity-test/">Home</a>
      </p>
    </div>
  );
});

export const head: DocumentHead = () => {
  return {
    title: 'Catch All',
  };
};

export const onGet: RequestHandler = ({ url, abort }) => {
  if (url.pathname === '/qwikcity-test/catchall/') {
    // special case catchall
    return;
  }

  abort();
};
