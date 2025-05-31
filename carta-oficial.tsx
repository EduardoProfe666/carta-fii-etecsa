import { Calendar, MapPin, Quote } from "lucide-react";

export default function CartaOficial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border border-yellow-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Logo y nombre de la facultad */}
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300">
                <img
                  src="/logo-orqui.png"
                  alt="Escudo de la Facultad de Ingeniería Informática"
                  className="w-14 h-14 md:w-16 md:h-16"
                />
              </div>
              <div className="text-white">
                <h1 className="text-xl md:text-2xl font-bold leading-tight tracking-wide">
                  FACULTAD DE INGENIERÍA INFORMÁTICA
                </h1>
                <h2 className="text-base md:text-lg font-semibold mt-1">
                  Universidad Tecnológica de La Habana
                </h2>
                <h3 className="text-base md:text-lg font-semibold">
                  "José Antonio Echeverría" (CUJAE)
                </h3>
                <div className="mt-2 px-3 py-1 bg-white/20 rounded-full inline-block">
                  <p className="text-sm md:text-base font-bold">
                    FEDERACIÓN ESTUDIANTIL UNIVERSITARIA
                  </p>
                </div>
              </div>
            </div>

            {/* Fecha */}
            <div className="text-white text-right bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="flex items-center gap-2 justify-end mb-2">
                <MapPin className="w-5 h-5" />
                <Calendar className="w-5 h-5" />
              </div>
              <p className="text-base md:text-lg font-bold">
                La Habana, 31 de mayo de 2025
              </p>
              <p className="text-sm md:text-base font-semibold">
                Año 67 de la Revolución
              </p>
            </div>
          </div>
        </div>

        {/* Cita de Fidel */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 md:p-8 border-b-4 border-yellow-400">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <blockquote className="text-lg md:text-xl font-semibold text-gray-800 italic leading-relaxed">
                "Revolución es cambiar todo lo que debe ser cambiado"
              </blockquote>
              <cite className="text-base md:text-lg font-bold text-yellow-700 mt-2 block">
                — Comandante en Jefe Fidel Castro Ruz
              </cite>
            </div>
          </div>
        </div>

        {/* Contenido de la carta */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Encabezado */}
          <div className="mb-10">
            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              A QUIEN PUEDA INTERESAR
            </h4>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded mx-auto"></div>
          </div>

          {/* Cuerpo de la carta */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
            <p className="text-lg md:text-xl font-medium">
              El Consejo de la Federación Estudiantil Universitaria de la
              Facultad de Ingeniería Informática de la Universidad Tecnológica
              de La Habana "José Antonio Echeverría" (CUJAE), en ejercicio de su
              función representativa y en defensa de los derechos e intereses
              legítimos de la comunidad estudiantil, se dirige a ustedes para
              expresar su más categórica protesta ante las recientes medidas
              restrictivas implementadas por la Empresa de Telecomunicaciones de
              Cuba S.A. (ETECSA).
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h5 className="text-lg font-bold text-gray-800 mb-3">
                CONSIDERANDOS:
              </h5>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que el acceso a las tecnologías de la información y las
                    comunicaciones constituye un derecho fundamental para el
                    desarrollo académico y profesional de nuestros estudiantes.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que la formación de ingenieros informáticos de excelencia
                    requiere del acceso irrestricto a recursos digitales,
                    plataformas de desarrollo y herramientas tecnológicas
                    especializadas.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que las limitaciones impuestas comprometen gravemente la
                    calidad de la educación superior en el área de las ciencias
                    informáticas y afectan el desarrollo científico-técnico del
                    país.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-lg md:text-xl">
              Las medidas implementadas por ETECSA han generado un impacto
              negativo directo en el proceso de enseñanza-aprendizaje de
              nuestros estudiantes, limitando su capacidad para acceder a
              repositorios científicos, plataformas de desarrollo colaborativo,
              herramientas de programación en línea y recursos educativos
              especializados que son indispensables para su formación
              profesional.
            </p>

            <p className="text-lg md:text-xl">
              Como institución comprometida con la excelencia académica y el
              desarrollo tecnológico de la nación, consideramos que estas
              restricciones constituyen un obstáculo significativo para la
              formación de los profesionales que el país necesita en el sector
              de las tecnologías de la información y las comunicaciones.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <h5 className="text-lg font-bold text-gray-800 mb-3">
                POR TANTO, SOLICITAMOS:
              </h5>
              <ol className="space-y-3 text-base md:text-lg list-decimal list-inside">
                <li>
                  La revisión inmediata de las políticas restrictivas que
                  afectan el acceso a recursos educativos digitales.
                </li>
                <li>
                  El establecimiento de un protocolo especial para instituciones
                  de educación superior que garantice el acceso necesario para
                  fines académicos y de investigación.
                </li>
                <li>
                  La apertura de un diálogo constructivo entre ETECSA y las
                  universidades del país para encontrar soluciones que no
                  comprometan la calidad de la educación superior.
                </li>
              </ol>
            </div>

            <p className="text-lg md:text-xl font-semibold">
              Confiamos en que ETECSA, como empresa estatal comprometida con el
              desarrollo del país, reconsiderará estas medidas y priorizará el
              apoyo a la formación de los profesionales que Cuba necesita para
              su desarrollo tecnológico y científico.
            </p>
          </div>

          {/* Cierre */}
          <div className="mt-8">
            <p className="text-xl font-bold text-gray-800">ATENTAMENTE,</p>

            <div className="flex justify-end">
              <div className="text-right">
                <div className="w-64 border-b-3 border-gray-400 mb-4"></div>
                <p className="text-base md:text-lg font-bold text-gray-800">
                  CONSEJO DE LA FEDERACIÓN ESTUDIANTIL UNIVERSITARIA
                </p>
                <p className="text-base md:text-lg font-bold text-gray-800">
                  FACULTAD DE INGENIERÍA INFORMÁTICA
                </p>
                <p className="text-sm md:text-base text-gray-600 mt-2">
                  Universidad Tecnológica de La Habana
                </p>
                <p className="text-sm md:text-base text-gray-600">
                  "José Antonio Echeverría" (CUJAE)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-3 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600"></div>
      </div>
    </div>
  );
}
