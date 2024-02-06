function login() {
    const senha = document.querySelector('email');
	const btn = document.querySelector('senha');

	btn.onclick = () =>
	{
		if (senha.type === 'senha') 
		{
			email.type = 'text'
			btn.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SA14-A-zoRaiJ2GdUiESsisaFiHNYrUZtjtjZqnth0D_KdfkwzQWIdCjbzhAoYKPTvs&usqp=CAU'
		}
		else
		{
			senha.type = 'senha'
			btn.src = 'https://icon-library.com/images/icon-eyes/icon-eyes-12.jpg'
		}
	}}
