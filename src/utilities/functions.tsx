export const fetchEndpoint = (endpoint: string, setState: any) => {
  fetch(endpoint)
    .then((response) => response.json())
    .then((json) => setState(json))
}
