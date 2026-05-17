export default async function handler(req, res) {
  try {
    const payload = req.body || {};

    const sims = payload.sims || {};
    const context = payload.context || {};
    const memory = payload.memory || {};

    const sceneSummary = `Scene between ${sims.actor_id} and ${sims.target_id}. Context: ${JSON.stringify(context)}`;

    const memoryUpdates = {
      individual: memory.individual || {},
      relationship: memory.relationship || {},
      household: memory.household || {}
    };

    return res.status(200).json({
      ok: true,
      scene_summary: sceneSummary,
      memory_updates: memoryUpdates
    });

  } catch (error) {
    return res.status(200).json({
      ok: false,
      error: error.message,
      memory_updates: {}
    });
  }
}
