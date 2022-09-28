export function openModal() {
  const modal = document.getElementsByTagName('dialog')[0];

  modal.showModal();
}

export function closeModal() {
  const modal = document.getElementsByTagName('dialog')[0];

  modal.close();
}
