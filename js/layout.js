function criarMenu(caminhoParaRaiz) {
    const header = document.querySelector('header');
    
    header.innerHTML = `
        <nav class="border-b-2 border-slate-300 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
            <div class="container mx-auto px-6 py-3 flex justify-between items-center">
                <a href="${caminhoParaRaiz}index.html" class="flex items-center gap-2 text-blue-900 hover:text-blue-600 transition group">
                    <i class="fa-solid fa-pencil text-xl text-red-500 transform group-hover:-rotate-12 transition"></i>
                    <span class="text-3xl font-bold font-handwriting">LivroJS</span>
                </a>

                <ul class="hidden md:flex gap-6 font-handwriting text-xl text-blue-800">
                    <li>
                        <a href="${caminhoParaRaiz}index.html" class="hover:underline decoration-wavy decoration-red-400">Início</a>
                    </li>
                    <li>
                        <a href="https://github.com/seuusuario" target="_blank" class="hover:underline decoration-wavy decoration-red-400">
                            <i class="fa-brands fa-github"></i> Meu GitHub
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    `;
}

function criarRodape() {
    const footer = document.querySelector('footer');
    
    footer.innerHTML = `
        <div class="mt-12 py-8 text-center font-handwriting text-blue-800 opacity-70">
            <div class="mb-2">
                <i class="fa-solid fa-star text-yellow-500"></i>
                <span class="mx-2 decoration-dashed underline">Estudos do Jefferson</span>
                <i class="fa-solid fa-star text-yellow-500"></i>
            </div>
            <p class="text-sm">Feito com café e código.</p>
        </div>
    `;
}