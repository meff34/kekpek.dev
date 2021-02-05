const fetch = async (query, errorMessage, gatsby) => {
  const { data, errors } = await gatsby.graphql(query)

  handleErrors(errorMessage, errors, gatsby.reporter)

  return data
}

const handleErrors = (message, errors, reporter) => {
  if (errors) {
    reporter.panic(`Error: ${message.toUpperCase()}\n${errors.toString()}`)
  }
}

module.exports = { handleErrors, fetch }
