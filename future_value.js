const calculateClick = () => {
    const investment = $("#investment").val()
    const rate = $("#rate").val()
    const years = $("#years").val()
    const errorMsg = (attribute) => {
        return "[ERROR] " + $(`label[for="${attribute}"]`).text() + "\nPlease enter a number greater than 0"
    }

    if (isNaN(investment) || investment <= 0) return alert(errorMsg("investment"))
    if (isNaN(rate) || rate <= 0) return alert(errorMsg("rate"))
    if (isNaN(years) || years <= 0) return alert(errorMsg("years"))
    
    // FV = PV (1 + r)^n
    let futureValue = investment            // Set FV to initial investment (PV).
    for (let i = 0; i < years; i++) {       // Each year,
        futureValue *= 1 + rate / 100       // multiply by rate and set to new investment amount.
    }

    $("#future_value").val("$" + futureValue.toFixed(2))
}

$(document).ready(function() {
    $("#calculate").click(calculateClick);
    $(document).on("keydown", (ev) => { if (ev.key === "Enter") calculateClick() })
    $("#investment").focus();
});