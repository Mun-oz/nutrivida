import { useState, useEffect } from 'react';

export function useFetch(url) {
  // Guardamos los datos, el error y la última URL cargada con éxito o error
  const [state, setState] = useState({
    data: null,
    error: null,
    loadedUrl: null,
  });

  useEffect(() => {
    if (!url) return;

    const controller = new AbortController();

    // Las llamadas a setState solo ocurren dentro de las promesas asíncronas (.then / .catch)
    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error HTTP: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setState({ data, error: null, loadedUrl: url });
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setState({ data: null, error: err.message, loadedUrl: url });
        }
      });

    return () => controller.abort();
  }, [url]);

  // 'loading' se DERIVA: si hay una URL pedida pero aún no coincide con la URL cargada
  const loading = Boolean(url) && state.loadedUrl !== url;

  return {
    data: state.data,
    loading,
    error: state.error,
  };
}