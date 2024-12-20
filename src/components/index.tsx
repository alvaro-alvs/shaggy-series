import AppContextProvider from "@/providers/AppContextProvider"



export default function Index() {
	return (
		<AppContextProvider>
			<main id="container">
				<h1 className="text-3xl"> Bem Vindo, Dev! </h1>

				<p className="text-lg"> Aqui voce pode ver todos os seus <a href="/series">series</a> favoritas </p>


			</main>
		</AppContextProvider>
	)
}