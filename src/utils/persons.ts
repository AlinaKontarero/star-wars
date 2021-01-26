import { useState, useEffect } from 'react';

export default function usePersons() {
  const [page, setPage] = useState<number>(1)
  const [persons, setPersons] = useState<string[]>([]);
  const [error, setError] = useState<string>();;

  useEffect(() => {
    if (!error) {
        fetch(`https://swapi.dev/api/people/?page=${page}`)
          .then(res => {
              if (res.status === 404) setError('No other pages');
              else return res.json()
                  .then((result) => {
                      console.log('got result', page);
                      // if people or page could be set elsewhere,
                      // use the callback form instead below
                      setPersons(persons.concat(result.results));
                      setPage(page || 0 + 1);
                  });
          })
          .catch((err) => {
              setError(err);
          })
    }
}, [page]);

  return {
    persons,
    error,
    page
  };
}