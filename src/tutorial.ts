enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}

Object.values(ServerResponseStatus).forEach((value) => {
  if (typeof value === 'number') {
    console.log(value);
  }
});

console.log(ServerResponseStatus);

interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first item', 'second item'],
  };
}

const response: ServerResponse = getServerResponse();

console.log(response);
