



export function CountryCode({ countryCode }: { countryCode: string }) {

    switch (countryCode) {
        case "KZ":
            return <span className="inline-block relative">
                <span
                    className="bg-linear-to-b from-sky-400 to-yellow-400 bg-clip-text text-transparent font-bold"
                    style={{
                        backgroundImage: "linear-gradient(to bottom, #1EB7E6 0%, #1EB7E6 70%, #FEC50A 70%, #FEC50A 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    KZ
                </span>
            </span>
        case "RU":
            return <span
                className="bg-linear-to-b from-white via-blue-600 to-red-600 bg-clip-text text-transparent font-bold"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, #FFFFFF 0%, #FFFFFF 33.33%, #0039A6 33.33%, #0039A6 66.66%, #D52B1E 66.66%, #D52B1E 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                RU
            </span>
        case "BY":
            return <span
                className="font-bold bg-linear-to-b from-red-600 to-green-600 bg-clip-text text-transparent"
                style={{
                    backgroundImage: "linear-gradient(to bottom, #CE1126 0%, #CE1126 50%, #007A33 50%, #007A33 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                BY
            </span>
        case "AM":
            return <span
                className="bg-linear-to-b from-red-600 via-blue-600 to-orange-500 bg-clip-text text-transparent font-bold"
                style={{
                    backgroundImage:
                        "linear-gradient(to bottom, #D90012 0%, #D90012 33.33%, #0033A0 33.33%, #0033A0 66.66%, #F2A800 66.66%, #F2A800 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                }}
            >
                AM
            </span>
        default:
            return countryCode;
    }

    return (
        <div>
            <h2>Country Code</h2>
        </div>
    )
}