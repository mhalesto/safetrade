export const statusColor = (status: string) => {
  if (status === 'in progress') {
    console.log('Inside in progress')
    return 'alert';
  } else if (status === 'confirmed') {
    return 'success';
  } else if (status === 'on hold') {
    return 'theme';
  }
}