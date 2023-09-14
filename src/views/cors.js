const cors = (origin, method, headers) => {
    const corsHeaders = {
      "Access-Control-Allow-Origin": origin,
      "Access-Control-Allow-Methods": method,
      "Access-Control-Allow-Headers": headers,
    };
  
    return corsHeaders;
  };
  
  export default cors;