from fastapi import APIRouter

router = APIRouter(prefix="/trade", tags=["trade"])

@router.post("/execute")
def execute_trade(trade_data: dict):
    # Simulates a trade execution
    return {"status": "executed", "details": trade_data}

@router.get("/history")
def get_trade_history():
    # Example mock trade history
    return [
        {"pair": "EUR/USD", "action": "BUY", "profit": 320.50},
        {"pair": "BTC/USD", "action": "SELL", "profit": 184.20}
    ]
