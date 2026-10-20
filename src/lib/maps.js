/** Address-based directions using Google's documented Maps URL format.
 * https://developers.google.com/maps/documentation/urls/get-started#directions
 * Approximate overview coordinates must not be used as navigation destinations.
 */
export function directionsHref(address) {
  const params = new URLSearchParams({api: '1', destination: address})
  return `https://www.google.com/maps/dir/?${params.toString()}`
}
