package com.adrbrpa.capacitorheatmap

import android.util.Log
import com.adrbrpa.capacitorheatmap.heatmaps.BaseHeatmap
import com.adrbrpa.capacitorheatmap.heatmaps.SimpleHeatmap
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin

@CapacitorPlugin(name = "Heatmap")
class Heatmap : Plugin() {

    private val TAG: String = Heatmap::class.java.simpleName
    private lateinit var implementation: BaseHeatmap

    @PluginMethod
    fun initialize(call: PluginCall) {
        val type = call.getString("type")
        val colorScale = call.getObject("colorScale")
        Log.d(TAG, "[Heatmap Plugin Native Android]: options -> type: $type | colorScale: " +
                "$colorScale");

        when (type) {
            "simple" -> implementation = SimpleHeatmap(context)
            else -> {
                Log.e(TAG, "[Heatmap Plugin Native Android]: Heatmap type $type not implemented");
            }
        }

        val ret = JSObject()
        ret.put("value", "initialize")
        call.resolve(ret)
    }
}