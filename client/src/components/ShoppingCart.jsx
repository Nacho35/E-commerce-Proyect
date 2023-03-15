import Pic1 from "../assets/product-1.jpg";
import Pic2 from "../assets/product-2.jpg";
import Pic3 from "../assets/product-3.jpg";
import Pic4 from "../assets/product-4.jpg";
import Pic5 from "../assets/product-5.jpg";
import Pic6 from "../assets/product-6.jpg";
import Pic7 from "../assets/product-7.jpg";
import Pic8 from "../assets/product-8.jpg";
import Pic9 from "../assets/product-9.jpg";
import Pic10 from "../assets/product-10.jpg";
import Pic11 from "../assets/product-11.jpg";
import Pic12 from "../assets/product-12.jpg";
import Pic13 from "../assets/product-13.jpg";
import Pic14 from "../assets/product-14.jpg";
import Pic15 from "../assets/product-15.jpg";
import Pic16 from "../assets/product-16.jpg";
import Pic17 from "../assets/product-17.jpg";
import Pic18 from "../assets/product-18.jpg";
import Pic19 from "../assets/product-19.jpg";
import Pic20 from "../assets/product-20.jpg";
import Pic21 from "../assets/product-21.jpg";
import Pic22 from "../assets/product-22.jpg";
import Pic23 from "../assets/product-23.jpg";
import Pic24 from "../assets/product-24.jpg";
import Pic25 from "../assets/product-25.jpg";

const ShoppingCart = () => {
	return document.addEventListener("DOMContentLoaded", () => {
		// Variables
		const baseDeDatos = [
			{
				id: 1,
				src: Pic1,
				title: "Double Cheese Pizza",
				description:
					"Delicious pizza with double cheese melted on top, with parmesan cheese and egg",
				price: "$15.30",
				type: "pizzas",
			},
			{
				id: 2,
				src: Pic2,
				title: "Seafood",
				description:
					"A delightful mix of seafood including shrimp, calamari, and mussels",
				price: "$23.99",
				type: "all",
			},
			{
				id: 3,
				src: Pic3,
				title: "Double mac burger",
				description:
					"Two juicy beef patties served with lettuce, tomato, onion, and our signature special sauce",
				price: "$13.80",
				type: "burgers",
			},
			{
				id: 4,
				src: Pic4,
				title: "Pasta",
				description:
					"A mouth-watering dish of al dente pasta with your choice of sauce and topped with parmesan cheese",
				price: "$16.99",
				type: "pasts",
			},
			{
				id: 5,
				src: Pic5,
				title: "Beef cheese burger",
				description:
					"A classic burger with a juicy beef patty and melted cheese on top",
				price: "$11.50",
				type: "burgers",
			},
			{
				id: 6,
				src: Pic6,
				title: "Double cheese pizza with pepperoni",
				description:
					"Delicious pizza with double cheese melted on top, with parmesan cheese and pepperoni",
				price: "$15.30",
				type: "pizzas",
			},
			{
				id: 7,
				src: Pic7,
				title: "Lemonade",
				description: "Freshly squeezed lemonade with a hint of sweetness",
				price: "$5.00",
				type: "drinks",
			},
			{
				id: 8,
				src: Pic8,
				title: "Chicken burger",
				description:
					"Grilled chicken breast served with lettuce, tomato, onion, and our signature special sauce",
				price: "$14.35",
				type: "burgers",
			},
			{
				id: 9,
				src: Pic9,
				title: "Grill Meat",
				description: "A juicy and tender cut of steak grilled to perfection",
				price: "$16.00",
				type: "steaks",
			},
			{
				id: 10,
				src: Pic10,
				title: "Specialty of the house",
				description:
					"Savor our chef's special succulent steak served with garlic mashed potatoes.",
				price: "$25.00",
				type: "steaks",
			},
			{
				id: 11,
				src: Pic11,
				title: "Chicken legs",
				description: "Two juicy chicken legs served with your choice of sauce",
				price: "$14.00",
				type: "steaks",
			},
			{
				id: 12,
				src: Pic12,
				title: "Loin meat with vegetables",
				description: "Tender loin meat served with grilled vegetables",
				price: "$20.00",
				type: "steaks",
			},
			{
				id: 13,
				src: Pic13,
				title: "Roman salad",
				description:
					"A crisp and refreshing salad with romaine lettuce, croutons, and parmesan cheese",
				price: "$12.40",
				type: "salads",
			},
			{
				id: 14,
				src: Pic14,
				title: "Thousands of salads to suit you",
				description:
					"Customize your own salad with our wide variety of fresh ingredients",
				price: "$13.50",
				type: "salads",
			},
			{
				id: 15,
				src: Pic15,
				title: "Vegetable casserole",
				description:
					"A hearty and healthy dish of baked vegetables topped with melted cheese",
				price: "$11.10",
				type: "salads",
			},
			{
				id: 16,
				src: Pic16,
				title: "Brownies",
				description:
					"Indulge in fudgy brownies made with high-quality cocoa powder and a secret ingredient",
				price: "$10.00",
				type: "deserts",
			},
			{
				id: 17,
				src: Pic17,
				title: "Strawberry cake",
				description:
					"Moist strawberry cake with fresh strawberries and creamy frosting",
				price: "$8.50",
				type: "deserts",
			},
			{
				id: 18,
				src: Pic18,
				title: "Meridian cake with chocolate",
				description:
					"Decadent Meridian Cake with chocolate layers and shavings",
				price: "$12.20",
				type: "deserts",
			},
			{
				id: 19,
				src: Pic19,
				title: "Sparkling with orange",
				description:
					"Refreshing orange juice and sparkling water drink for summer",
				price: "$11.60",
				type: "drinks",
			},
			{
				id: 20,
				src: Pic20,
				title: "Coca Cola",
				description: "Classic Coca Cola for a refreshing carbonated taste",
				price: "$6.00",
				type: "drinks",
			},
			{
				id: 21,
				src: Pic21,
				title: "Orange juice",
				description:
					"Freshly squeezed orange juice for a sweet and tangy start to your day",
				price: "$8.00",
				type: "drinks",
			},
			{
				id: 22,
				src: Pic22,
				title: "Ribbons with white sauce",
				description:
					"Satisfy your cravings with our classic Ribbons with White Sauce - al dente pasta in a rich and creamy white sauce",
				price: "$19.00",
				type: "pasts",
			},
			{
				id: 23,
				src: Pic23,
				title: "Ribbons with red sauce",
				description:
					"Enjoy a classic Italian favorite with our Ribbons with Red Sauce - al dente pasta topped with a flavorful tomato-based sauce",
				price: "$21.20",
				type: "pasts",
			},
			{
				id: 24,
				src: Pic24,
				title: "Sourdough pizza",
				description:
					"Fresh and flavorful Sourdough Pizza with homemade crust - perfect for a cozy night in!",
				price: "$16.30",
				type: "pizzas",
			},
			{
				id: 25,
				src: Pic25,
				title: "Double sauce flaming burger",
				description:
					"Bold and juicy Double Sauce Flaming Burger with crispy fries - not for the faint of heart!",
				price: "$15.70",
				type: "burgers",
			},
		];

		let carrito = [];
		const divisa = "$";
		const DOMitems = document.querySelector("#items");
		const DOMcarrito = document.querySelector("#carrito");
		const DOMtotal = document.querySelector("#total");
		const DOMbotonVaciar = document.querySelector("#boton-vaciar");
		const miLocalStorage = window.localStorage;

		// Funciones

		/**
		 * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
		 */
		function renderizarProductos() {
			baseDeDatos.forEach((info) => {
				// Estructura
				const miNodo = document.createElement("div");
				// Body
				const miNodoCardBody = document.createElement("div");
				// Titulo
				const miNodoTitle = document.createElement("h5");
				miNodoTitle.textContent = info.nombre;
				// Imagen
				const miNodoImagen = document.createElement("img");
				miNodoImagen.setAttribute("src", info.imagen);
				// Precio
				const miNodoPrecio = document.createElement("p");
				miNodoPrecio.textContent = `${info.precio}${divisa}`;
				// Boton
				const miNodoBoton = document.createElement("button");
				miNodoBoton.textContent = "+";
				miNodoBoton.setAttribute("marcador", info.id);
				miNodoBoton.addEventListener("click", agregarProductoAlCarrito);
				// Insertamos
				miNodoCardBody.appendChild(miNodoImagen);
				miNodoCardBody.appendChild(miNodoTitle);
				miNodoCardBody.appendChild(miNodoPrecio);
				miNodoCardBody.appendChild(miNodoBoton);
				miNodo.appendChild(miNodoCardBody);
				DOMitems.appendChild(miNodo);
			});
		}

		/**
		 * Evento para añadir un producto al carrito de la compra
		 */
		function agregarProductoAlCarrito(evento) {
			// Anyadimos el Nodo a nuestro carrito
			carrito.push(evento.target.getAttribute("marcador"));
			// Actualizamos el carrito
			renderizarCarrito();
			// Actualizamos el LocalStorage
			guardarCarritoEnLocalStorage();
		}

		/**
		 * Dibuja todos los productos guardados en el carrito
		 */
		function renderizarCarrito() {
			// Vaciamos todo el html
			DOMcarrito.textContent = "";
			// Quitamos los duplicados
			const carritoSinDuplicados = [...new Set(carrito)];
			// Generamos los Nodos a partir de carrito
			carritoSinDuplicados.forEach((item) => {
				// Obtenemos el item que necesitamos de la variable base de datos
				const miItem = baseDeDatos.filter((itemBaseDatos) => {
					// ¿Coincide las id? Solo puede existir un caso
					return itemBaseDatos.id === parseInt(item);
				});
				// Cuenta el número de veces que se repite el producto
				const numeroUnidadesItem = carrito.reduce((total, itemId) => {
					// ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
					return itemId === item ? (total += 1) : total;
				}, 0);
				// Creamos el nodo del item del carrito
				const miNodo = document.createElement("li");
				miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
				// Boton de borrar
				const miBoton = document.createElement("button");
				miBoton.textContent = "X";
				miBoton.style.marginLeft = "1rem";
				miBoton.dataset.item = item;
				miBoton.addEventListener("click", borrarItemCarrito);
				// Mezclamos nodos
				miNodo.appendChild(miBoton);
				DOMcarrito.appendChild(miNodo);
			});
			// Renderizamos el precio total en el HTML
			DOMtotal.textContent = calcularTotal();
		}

		/**
		 * Evento para borrar un elemento del carrito
		 */
		function borrarItemCarrito(evento) {
			// Obtenemos el producto ID que hay en el boton pulsado
			const id = evento.target.dataset.item;
			// Borramos todos los productos
			carrito = carrito.filter((carritoId) => {
				return carritoId !== id;
			});
			// volvemos a renderizar
			renderizarCarrito();
			// Actualizamos el LocalStorage
			guardarCarritoEnLocalStorage();
		}

		/**
		 * Calcula el precio total teniendo en cuenta los productos repetidos
		 */
		function calcularTotal() {
			// Recorremos el array del carrito
			return carrito
				.reduce((total, item) => {
					// De cada elemento obtenemos su precio
					const miItem = baseDeDatos.filter((itemBaseDatos) => {
						return itemBaseDatos.id === parseInt(item);
					});
					// Los sumamos al total
					return total + miItem[0].precio;
				}, 0)
				.toFixed(2);
		}

		/**
		 * Varia el carrito y vuelve a dibujarlo
		 */
		function vaciarCarrito() {
			// Limpiamos los productos guardados
			carrito = [];
			// Renderizamos los cambios
			renderizarCarrito();
			// Borra LocalStorage
			localStorage.clear();
		}

		function guardarCarritoEnLocalStorage() {
			miLocalStorage.setItem("carrito", JSON.stringify(carrito));
		}

		function cargarCarritoDeLocalStorage() {
			// ¿Existe un carrito previo guardado en LocalStorage?
			if (miLocalStorage.getItem("carrito") !== null) {
				// Carga la información
				carrito = JSON.parse(miLocalStorage.getItem("carrito"));
			}
		}

		// Eventos
		DOMbotonVaciar.addEventListener("click", vaciarCarrito);

		// Inicio
		cargarCarritoDeLocalStorage();
		renderizarProductos();
		renderizarCarrito();
	});
};

export default ShoppingCart;
