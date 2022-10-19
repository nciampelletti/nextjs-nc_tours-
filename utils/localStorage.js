export const addUserToLocalStorage = (user) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("user", JSON.stringify(user))
  }
}

export const removeUserFromLocalStorage = (user) => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("user")
  }
}

export const getUserFromLocalStorage = () => {
  // let result
  // if (typeof window !== "undefined") {
  //   result = localStorage.getItem("user")
  // }

  // const user = result ? JSON.parse(result) : null

  // return user
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("user")
  }
  return null
}
