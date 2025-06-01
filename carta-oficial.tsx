import { Calendar, MapPin, Quote } from "lucide-react";

export default function CartaOficial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden border border-yellow-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-600 p-4 sm:p-6 md:p-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 sm:gap-6">
            {/* Logo y nombre de la facultad */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 w-full lg:w-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-yellow-300 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src="/logo-orqui.png"
                  alt="Escudo de la Facultad de Ingeniería Informática"
                  className="w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
                />
              </div>
              <div className="text-white text-center sm:text-left w-full sm:w-auto">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight tracking-wide break-words">
                  FACULTAD DE INGENIERÍA INFORMÁTICA
                </h1>
                <h2 className="text-sm sm:text-base md:text-lg font-semibold mt-1 break-words">
                  Universidad Tecnológica de La Habana
                </h2>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold break-words">
                  "José Antonio Echeverría" (CUJAE)
                </h3>
                <div className="mt-2 px-2 sm:px-3 py-1 bg-white/20 rounded-full inline-block">
                  <p className="text-xs sm:text-sm md:text-base font-bold whitespace-nowrap">
                    FEDERACIÓN ESTUDIANTIL UNIVERSITARIA
                  </p>
                </div>
              </div>
            </div>

            {/* Fecha */}
            <div className="text-white text-center lg:text-right bg-white/10 p-3 sm:p-4 rounded-lg backdrop-blur-sm w-full lg:w-auto lg:min-w-fit">
              <div className="flex items-center gap-2 justify-center lg:justify-end mb-2">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <p className="text-sm sm:text-base md:text-lg font-bold whitespace-nowrap">
                La Habana, 31 de mayo de 2025
              </p>
              <p className="text-xs sm:text-sm md:text-base font-semibold whitespace-nowrap">
                Año 67 de la Revolución Cubana
              </p>
            </div>
          </div>
        </div>

        {/* Cita de FEU */}
        <div className="bg-gradient-to-r from-amber-100 to-yellow-100 p-6 md:p-8 border-b-4 border-yellow-400">
          <div className="flex items-start gap-4">
            <Quote className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
            <div>
              <blockquote className="text-md md:text-xl font-semibold text-gray-800 italic leading-relaxed">
                "Representar al estudiantado universitario; canalizando sus
                inquietudes, defendiendo sus intereses y viabilizando sus
                iniciativas. Garantizar el ejercicio efectivo de los derechos de
                sus miembros y velar por el cumplimiento de sus deberes"
              </blockquote>
              <cite className="text-base md:text-lg font-bold text-yellow-700 mt-2 block">
                — Objetivo general 2 del ABC de la FEU
              </cite>
            </div>
          </div>
        </div>

        {/* Contenido de la carta */}
        <div className="p-8 md:p-12 lg:p-16">
          {/* Encabezado */}
          <div className="mb-10">
            <h4 className="text-xl md:text-3xl font-bold text-gray-800 mb-4 text-center">
              A QUIEN PUEDA INTERESAR
            </h4>
            <div className="w-32 h-1 bg-gradient-to-r from-yellow-500 to-amber-500 rounded mx-auto"></div>
          </div>

          {/* Cuerpo de la carta */}
          <div className="space-y-8 text-gray-700 leading-relaxed text-justify">
            <p className="text-md md:text-xl font-medium">
              El Consejo de la Federación Estudiantil Universitaria de la
              Facultad de Ingeniería Informática de la Universidad Tecnológica
              de La Habana "José Antonio Echeverría" (CUJAE), en ejercicio de su
              función representativa y en defensa de los derechos e intereses
              legítimos de la comunidad estudiantil, desea expresar su profunda
              inconformidad con las recientes medidas comerciales implementadas
              por la Empresa de Telecomunicaciones de Cuba S.A. (ETECSA),
              relacionadas con el servicio de telefonía móvil a partir del 30 de
              mayo de 2025.
            </p>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <h5 className="text-lg font-bold text-gray-800 mb-3">
                CONSIDERANDO:
              </h5>
              <ul className="space-y-3 text-base md:text-lg">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que el acceso a Internet constituye un derecho humano global
                    y una herramienta esencial para el estudio, la superación
                    profesional y la investigación académica en el siglo XXI.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que la formación de ingenieros informáticos de excelencia
                    requiere del acceso irrestricto a recursos digitales,
                    plataformas de desarrollo y herramientas tecnológicas
                    especializadas, siendo estos no solo un complemento sino la
                    base del modelo educativo contemporáneo.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que los planes de estudio actuales y la infraestructura
                    educativa están fundamentados en tecnologías digitales
                    contemporáneas, por lo que cualquier obstáculo al acceso
                    digital afecta directamente la calidad de la formación.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full mt-3 flex-shrink-0"></span>
                  <span>
                    Que las limitaciones impuestas comprometen gravemente los
                    planes de transformación digital del país y afectan las
                    posibilidades de nuestra generación de insertarse con fuerza
                    y competitividad en la esfera tecnológica global.
                  </span>
                </li>
              </ul>
            </div>

            <p className="text-md md:text-xl">
              Comprendemos las razones expuestas por ETECSA para la adopción de
              estas medidas, fundamentadas en los desafíos financieros,
              tecnológicos y operativos que enfrenta la empresa. No obstante,
              consideramos que la forma en que fueron ejecutadas no resultó
              apropiada ni oportuna, generando un impacto negativo directo en el
              proceso de enseñanza-aprendizaje de nuestros estudiantes.
            </p>

            <p className="text-md md:text-xl">
              Aunque ETECSA justifica que no se afectarán los planes de
              transformación digital del país y que las afectaciones al
              estudiantado serían mínimas debido a la infraestructura
              universitaria existente, consideramos esta apreciación errónea. Si
              bien la CUJAE brinda facilidades respecto al acceso a estas
              tecnologías, la realidad es que estas medidas limitan
              significativamente la capacidad de nuestros estudiantes para
              acceder a repositorios científicos, plataformas de desarrollo
              colaborativo, herramientas de programación en línea y recursos
              educativos especializados indispensables para su formación
              profesional.
            </p>

            <p className="text-md md:text-xl">
              Como institución comprometida con la excelencia académica y el
              desarrollo tecnológico de la nación, entendemos que si realmente
              queremos que nuestra generación se inserte con fuerza y
              competitividad en la esfera tecnológica global, necesitamos
              avanzar al mismo ritmo que avanza el mundo. Esto implica políticas
              inclusivas que reconozcan el acceso a Internet como una
              herramienta esencial para el crecimiento intelectual, la
              innovación y el desarrollo social.
            </p>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
              <h5 className="text-lg font-bold text-gray-800 mb-3">
                POR TANTO, SOLICITAMOS:
              </h5>
              <ol className="space-y-3 text-base md:text-lg list-decimal list-inside">
                <li>
                  La revisión inmediata de las políticas restrictivas que
                  afectan el acceso a recursos educativos digitales y el derecho
                  humano al acceso a Internet.
                </li>
                <li>
                  El establecimiento de un protocolo especial para instituciones
                  de educación superior que garantice el acceso necesario para
                  fines académicos y de investigación.
                </li>
                <li>
                  La propiciación de un espacio de diálogo constructivo entre
                  representantes estudiantiles, incluidos los Consejos de la FEU
                  de otras facultades y universidades, y ETECSA, con el objetivo
                  de exponer nuestras inquietudes y encontrar soluciones que
                  respondan a los intereses comunes.
                </li>
                <li>
                  La implementación de políticas inclusivas que no comprometan
                  el derecho a una educación de calidad ni el desarrollo
                  tecnológico de nuestro país.
                </li>
              </ol>
            </div>

            <p className="text-md md:text-xl">
              Reconocemos que aunque la única ventaja aparente de estas medidas
              sería la entrada de divisas al país, esto no debe lograrse a costa
              de limitar el acceso a Internet del pueblo cubano. Confiamos en
              que ETECSA, como empresa estatal comprometida con el desarrollo
              del país, reconsiderará estas medidas y priorizará el apoyo a la
              formación de los profesionales que Cuba necesita para su
              desarrollo tecnológico y científico, contribuyendo así eficazmente
              al futuro de nuestra nación.
            </p>
          </div>

          {/* Cierre */}
          <div className="mt-8">
            <p className="text-lg font-bold text-gray-800">ATENTAMENTE,</p>

            <div className="flex justify-end">
              <div className="text-right">
                <div className="w-64 border-b-3 border-gray-400 mb-4"></div>
                <p className="text-md md:text-lg font-bold text-gray-800">
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
