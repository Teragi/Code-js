function check() {
  let nbr;
  nbr = Number(document.getElementById('age').value);
  if (nbr < 62) {
    alert("Vous n'avez pas l'âge requis pour bénéficier d'une retraite !");
  } else {
    alert('Vous avez le droit de partir en retraite ! ');
  }
}
