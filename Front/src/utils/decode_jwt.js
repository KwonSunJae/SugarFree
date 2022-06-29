
export default function decode_jwt(token){
    // var base64Payload = token.split('.')[1];
    // var payload = Buffer.from(base64Payload, 'base64');
    // var result = JSON.parse(payload.toString());
    let b64DecodeUnicode = str =>
  decodeURIComponent(
    Array.prototype.map.call(atob(str), c =>
      '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
    ).join(''))

let parseJwt = token =>
  JSON.parse(
    b64DecodeUnicode(
      token.split('.')[1].replace('-', '+').replace('_', '/')
    )
  )
  console.log(parseJwt(token).user_id);
  return parseJwt(token).user_id;
}