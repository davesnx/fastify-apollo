module.exports = {
  printSchema: {
    schema: {
      response: {
        '200': {
          type: 'string'
        }
      }
    }
  },
  graphql: {
    schema: {
      querystring: {
        query: {
          type: 'string'
        },
        body: {
          type: 'object',
          properties: {
            query: {
              type: 'string'
            },
            operationName: {
              type: 'string'
            },
            variables: {
              type: 'object'
            }
          },
          required: ['query']
        },
        response: {
          '2xx': {
            type: 'object',
            properties: {
              data: {
                type: ['array', 'object']
              }
            }
          },
          '4xx': {
            type: 'object',
            properties: {
              data: {
                type: ['array', 'object']
              },
              errors: {
                type: 'array'
              }
            }
          }
        }
      }
    }
  },
  graphiql: {
    schema: {
      querystring: {
        query: {
          type: 'string'
        }
      },
      response: {
        '200': {
          type: 'string'
        }
      }
    }
  }
}
