const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  const hashData = (data) => {
    const stringifyData = JSON.stringify(data)
    const hashedData = crypto.createHash("sha3-512").update(stringifyData).digest("hex");

    return hashedData
  }
  
  if (event?.partitionKey) {
    candidate = event.partitionKey;
  } else {      
    candidate = event && hashData(event)
  }
  if(!candidate){
    candidate = TRIVIAL_PARTITION_KEY;
  }
  if(candidate && candidate.length > MAX_PARTITION_KEY_LENGTH){
    candidate = hashData(candidate)
  }
    
  return candidate;
};