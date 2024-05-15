export const formatDate = (dateString: string | null): string => {
  if (!dateString) return ""; // Return empty string if dateString is null or undefined

  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (+1 because months are zero-based) and pad with leading zero if necessary
  const day = date.getDate().toString().padStart(2, "0"); // Get day and pad with leading zero if necessary

  return `${year}-${month}-${day}`;
};
