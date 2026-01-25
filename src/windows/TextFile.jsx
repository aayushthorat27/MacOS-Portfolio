import WindowWrapper from "#hoc/WindowWrapper"
import { WindowControls } from "#components"
import useWindowStore from "#store/window"

const TextFile = () => {
    const { windows } = useWindowStore();
    const { isMaximized } = windows.txtfile;
    const data = windows.txtfile?.data;

    if (!data) return null;

    const styling = isMaximized ? 'mb-14 ' : ''

    const { name, image, subtitle, description } = data;

  return (
    <>
        <div id='window-header'>
            <WindowControls target="txtfile" />
            <h2>{name}</h2>
        </div>
        <div className="overflow-y-auto h-11/12 scroll-auto">

            {image ? (
                <div className="p-5 space-y-6 bg-white">
                        <div className="w-full">
                            <img src={image} alt={name} className="w-full h-auto rounded" />
                        </div>
                    </div>
                ) : null
            }
            {subtitle ? (
                <div className="px-4">
                    <h3 className="text-lg font-semibold mb-2">{subtitle}</h3>
                </div>
                ) : null
            }
            {Array.isArray(description) && description.length > 0 ? (
                    <div className={`${styling}`+"p-3 leading-relaxed text-base text-gray-800"}>
                        {description.map((paragraph, index) => (
                            <p key={index} className="mb-4">
                                {paragraph}
                            </p>
                        ))}
                    </div>
                ) : null
            
            }
        </div>
    </>
  )
}

const TextFileWindow = WindowWrapper(TextFile, 'txtfile');

export default TextFileWindow