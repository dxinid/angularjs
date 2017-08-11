
myAppModule.factory('stringTransformationService',
    function ()
    {
        return {
            transformString: function (inputText)
            {
                console.log ("[transformString] Entering...");

                if (!inputText)
                {
                    return "";
                }

                var output = "";

                for (var i = 0 ; i < inputText.length ; i++)
                {
                    if (i>0 && inputText[i] == inputText[i].toUpperCase())
                    {
                        output = output + " ";
                    }

                    output  = output + inputText[i];
                }

                console.log ("[transformString][output="+output+"]");

                return output;
            }

        }
    }
);