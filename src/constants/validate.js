export const required = value => value ? undefined : "Required";
export const mathLength15 = value => value.length > 15 ? 'Must be 15 characters or less' : undefined;
export const number = value => value && !isNaN(value) ? undefined : 'Must be a number';
export const minValue = min => value => value && value.length < min ? `Must be at least ${min}` : undefined;
export const minValue5 = minValue(5);
export const isValidEmail = value => value &&
    !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? 'Invalid email address' : undefined;
