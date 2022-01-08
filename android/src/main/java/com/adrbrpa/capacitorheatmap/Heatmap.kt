package com.adrbrpa.capacitorheatmap

import android.util.Log
import com.getcapacitor.annotation.CapacitorPlugin
import com.getcapacitor.PluginMethod
import com.getcapacitor.PluginCall
import com.getcapacitor.JSObject
import com.getcapacitor.Plugin
import android.content.Intent

@CapacitorPlugin(name = "Heatmap")
class Heatmap : Plugin() {

    private val TAG: String = Heatmap::class.java.simpleName

    @PluginMethod
    fun initialize(call: PluginCall) {
        val type = call.getString("type")
        val colorScale = call.getObject("colorScale")
        Log.d(TAG, "[Heatmap Plugin Native Android]: options -> type: $type | colorScale: " +
                "$colorScale")

        when (type) {
            "simple" -> {
                Log.d(TAG, "[Heatmap Plugin Native Android]: Heatmap type $type")
                val intent = Intent()
                intent.setClass(context, SimpleHeatmapActivity::class.java)
                activity.startActivity(intent)
            }
            else -> {
                Log.e(TAG, "[Heatmap Plugin Native Android]: Heatmap type $type not implemented")
            }
        }

        val ret = JSObject()
        ret.put("value", "initialize")
        call.resolve(ret)
    }
}