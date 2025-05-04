from fastapi import APIRouter

router = APIRouter(prefix="/market", tags=["market"])

@router.get("/prices")
def get_market_prices():
    # Simulated live market prices
    return {
        "EUR/USD": 1.0845,
        "BTC/USD": 29321.55,
        "USD/JPY": 149.25
    }
